<?php

namespace App\Providers;

use App\Models\App;
use App\Models\Version;
use App\Models\ShortCode;
use App\Observers\AppObserver;
use App\Observers\VersionObserver;
use App\Observers\ShortCodeObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        App::observe(AppObserver::class);
        Version::observe(VersionObserver::class);
        ShortCode::observe(ShortCodeObserver::class);
    }
}
