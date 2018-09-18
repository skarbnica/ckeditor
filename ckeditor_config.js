editors = [];
$('textarea.ckeditor').each(function(){
    var selector = $(this).attr('id');
    editors.push(selector);
});
// uploadUrl = '';

CKEconfig = {
    // Define the toolbar groups as it is a more accessible solution.
    filebrowserUploadUrl: uploadUrl,
    removePlugins: 'image',
    extraPlugins: ['justify', 'font', 'image2', 'uploadimage' ],
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
};

for (var i = 0; editors.length; i++){
    CKEDITOR.replace(editors[i], CKEconfig);
}
