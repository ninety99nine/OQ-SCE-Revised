<?php

namespace App\Traits;

use App\Traits\Base\BaseTrait;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

trait VersionTrait
{
    use BaseTrait;

    public function getCacheName($id)
    {
        return $this->getBaseCacheName().'_'.$id;
    }

    public function findAndCache($id = null)
    {
        if( $id == null) {

            $version = $this;
            $id = $version->id;

        }else{

            //  We failed to retrieve from the cache, therefore perform a query
            $version = DB::table('versions')->select('id', 'number', 'description', 'builder')->find($id);

            //  Convert the builder to an associative array (We want to do this operation once)
            $version->builder = json_decode($version->builder, true);

        }

        //  Cache the version
        Cache::put($this->getCacheName($id), $version);

        //  Return the project
        return $version;
    }

    public function removeFromCache($id = null)
    {
        if( $id == null) {
            $id = $this->id;
        }

        Cache::forget($this->getCacheName($id));
    }

    public function getBuilderTemplate()
    {
        return [
            'screens' => [],
            'markers' => [],
            'application_events' => [
                'on_start' => [
                    'conditional' => [
                        'code' => null,
                        'active' => false
                    ],
                    'collection' => []
                ],
                'on_close' => [
                    'conditional' => [
                        'code' => null,
                        'active' => false
                    ],
                    'collection' => []
                ],
            ],
            'global_events' => [],
            'global_variables' => [],
            'global_pagination' => [
                'active' => [
                    'selected_type' => 'yes',
                    'code' => ''
                ],
                'content_target' => [
                    'selected_type' => 'both'         //  instruction, action, both
                ],
                'paginate_by_line_breaks' => true,
                'slice' => [
                    'separation_type' => 'words',     //  characters, words
                    'start' => [
                        'text' => '0',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'end' => [
                        'text' => '160',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ]
                ],
                'scroll_down' => [
                    'name' => [
                        'text' => '99. Next',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'input' => [
                        'text' => '99',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'visible' => true
                ],
                'scroll_up' => [
                    'name' => [
                        'text' => '88. Prev',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'input' => [
                        'text' => '88',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'visible' => true
                ],
                'trailing_end' => [
                    'text' => '...',
                    'code_editor_text' => '',
                    'code_editor_mode' => false
                ],
                'break_line_before_trail' => false,
                'break_line_after_trail' => false,
            ],
            'subscription_plans' => [],
            'conditional_screens' => [
                'active' => false,
                'code' => null,
            ],
            'color_scheme'=> [
                'event_colors'=> [
                    'CRUD API' => '#2D8CF0',
                    'SMS API' => '#2D8CF0',
                    'Airtime Billing API' => '#2D8CF0',
                    'Orange Money API' => '#2D8CF0',
                    'Validation' => '#ED4014',
                    'Formatting' => '#F9E31C',
                    'Set Property' => '#2D8CF0',    // 2
                    'Custom Code' => '#00C2B1',
                    'Auto Link' => '#00BCD4',
                    'Auto Reply' => '#F06292',
                    'Revisit' => '#EA4CA3',         // 1
                    'Redirect' => '#EA4CA3',        // 1
                    'Notification' => '#19BE6B',
                    'Event Collection' => '#FEBD79',
                    'Terminate Session' => '#607D8B',   // 2
                    'Database' => '#19C919',

                    //  'Local Storage' => '#607D8B',
                ]
            ],
            'restrictions' => [
                'selected_type' => 'None',
                'blacklist' => [
                    'active' => false,
                    'numbers' => [
                        'text' => '',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'message' => ''
                ],
                'whitelist' => [
                    'active' => false,
                    'numbers' => [
                        'text' => '',
                        'code_editor_text' => '',
                        'code_editor_mode' => false
                    ],
                    'message' => ''
                ]
            ],
            'simulator' => [
                'debugger' => [
                    'return_logs' => true,
                    'return_log_types' => [
                        'info', 'warning', 'error',
                    ],
                    'return_summarized_logs' => true,
                ],
                'subscriber' => [
                    'phone_number' => '26777479083',
                ],
                'settings' => [
                    'allow_timeouts' => true,
                    'timeout_limit_in_seconds' => 120,
                    'timeout_message' => 'TIMEOUT: You have exceeded your time limit.',
                ],
            ],
            'sms_connection' => [
                'username' => [
                    'text' => '',
                    'code_editor_text' => '',
                    'code_editor_mode' => false
                ],
                'password' => [
                    'text' => '',
                    'code_editor_text' => '',
                    'code_editor_mode' => false
                ],
            ],
            'airtime_billing_connection' => [
                'client_id' => [
                    'text' => '',
                    'code_editor_text' => '',
                    'code_editor_mode' => false
                ],
                'client_secret' => [
                    'text' => '',
                    'code_editor_text' => '',
                    'code_editor_mode' => false
                ],
            ],
            'firebase_connection' => [
                'json' => [
                    'text' => '',
                    'code_editor_text' => '',
                    'code_editor_mode' => false
                ],
            ]
        ];
    }

}
