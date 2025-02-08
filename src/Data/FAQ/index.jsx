import React from 'react';
import { Articles, Knowledgebase, AskOurCommunity, Tutorials, HelpCenter, ContactUs, VideoTutorials, VictoriaWilson } from '../../Constant';
import { Edit, Globe, BookOpen, FileText, Youtube, MessageCircle, Mail, RotateCcw, DollarSign, Check, Link, Codepen } from 'react-feather';

export const ASKQUESData = [
    {
        icon: <Edit />,
        title: Tutorials
    },
    {
        icon: <Globe />,
        title: HelpCenter
    },
    {
        icon: <BookOpen />,
        title: Knowledgebase
    },
    {
        icon: <FileText />,
        title: Articles,
        class: 'badge badge-primary rounded-pill pull-right',
        val: '42'
    },
    {
        icon: <Youtube />,
        title: VideoTutorials,
        class: 'badge badge-primary rounded-pill pull-right',
        val: '642'
    },
    {
        icon: <MessageCircle />,
        title: AskOurCommunity
    },
    {
        icon: <Mail />,
        title: ContactUs
    },
];

export const LatestData = [
    {
        Iconclass: <RotateCcw className="font-primary" />,
        name: 'DavidLinner',
        title: 'requested money back for a double debit card charge',
        time: '10 minutes ago'
    },
    {
        Iconclass: <DollarSign className="font-primary" />,
        title: 'All sellers have received monthly payouts',
        time: '2 hours ago'
    },
    {
        Iconclass: <Link className="font-primary" />,
        name: 'UserChristopher',
        val: 'Wallace',
        title: 'is on hold and awaiting for staff reply',
        time: '45 minutes ago'
    },
    {
        Iconclass: <Check className="font-primary" />,
        val: VictoriaWilson,
        title: 'Ticket #43683 has been closed by',
        time: 'Dec 7, 11:48'
    },
];

export const ArticeVideoData1 = [
    {
        IconClass: <Codepen className="m-r-30" />,
        title: 'Using Video',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
    {
        IconClass: <Codepen className="m-r-30" />,
        title: 'Vel illum qu',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
    {
        IconClass: <Codepen className="m-r-30" />,
        title: 'Cum sociis natoqu',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
];

export const ArticeVideoData2 = [
    {
        IconClass: <FileText className="m-r-30" />,
        title: 'Vel illum qu',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
    {
        IconClass: <FileText className="m-r-30" />,
        title: 'Cum sociis natoqu',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
    {
        IconClass: <FileText className="m-r-30" />,
        title: 'Using Video',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    }
];

export const ArticeVideoData3 = [
    {
        IconClass: <Youtube className="m-r-30" />,
        title: 'Cum sociis natoqu',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
    {
        IconClass: <Youtube className="m-r-30" />,
        title: 'Using Video',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },
    {
        IconClass: <Youtube className="m-r-30" />,
        title: 'Vel illum qu',
        discription: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    },

];