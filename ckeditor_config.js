CKEDITOR.replace('editor1', {
    // Define the toolbar groups as it is a more accessible solution.
    removePlugins: 'image',
    extraPlugins: ['justify', 'font', 'image2' ],
    toolbar: [
        {name: 'document', items: ['Source']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-']},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']},
        {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
        {name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule'] },
        {name: 'styles', items: [ 'Styles', 'Format'] },
        {name: 'tools', items: ['Maximize'] },
        {name: 'about', items: [ 'About' ] }
    ],
    stylesSet: [
        {name: 'Mark', element: 'mark'},
        {name: 'Small', element: 'small'},
        {name: 'Big', element: 'big'}
    ]
});