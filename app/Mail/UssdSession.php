<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UssdSession extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $message;
    public $fromName;
    public $fromEmail;
    public $attachments;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($fromName, $fromEmail, $subject, $message, $attachments = [])
    {
        $this->subject = $subject;
        $this->message = $message;
        $this->fromName = $fromName;
        $this->fromEmail = $fromEmail;
        $this->attachments = $attachments;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $inputs = [
            'title' => 'Title',
            'subtitle' => 'Subtitle',
            'body' => 'This is the email body',
            'button' => [
                'text' => 'Button',
                'textColor' => '#fff',

                'bgColor' => '#000',
                'hoverBgColor' => '#000',
                'activeBgColor' => '#000',

                'alignment' => 'left',
                'link' => 'https://laracasts.com'
            ],
            'image' => [
                'link' => 'https://laracasts.com'
            ]
        ];

        return $this->from($this->fromEmail, $this->fromName)
                    ->view('emails.ussd.session', [
                        'emailMessage' => $this->message
                    ]);

        //  Add attachments
        if( count($this->attachments) ) {

            foreach($this->attachments as $attachment) {

                //  Create the PDF
                $pdf = $attachment['information'];

                $email = $email->attachData($pdf, $attachment['name'].'.pdf', [
                    'mime' => 'application/pdf',
                ]);

            }

        }

        return $email;

    }
}
