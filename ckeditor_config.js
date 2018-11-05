var uploadUrl = (filebrowserUploadUrl === undefined) ? '' : filebrowserUploadUrl;
config = CKEDITOR.config;

// Define the toolbar groups as it is a more accessible solution.
config.protectedSource = [];
config.filebrowserUploadUrl = uploadUrl;
config.removePlugins = 'image';
config.extraPlugins = 'justify,font,image2,uploadimage,stylesheetparser,iframe';

config.toolbar = [
    {name: 'document', items: ['Source']},
    { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
    {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-']},
    {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat']},
    {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
    {name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule'] },
    {name: 'styles', items: [ 'Styles', 'Format'] },
    {name: 'tools', items: ['Maximize'] },
    {name: 'about', items: [ 'About' ] }
];

config.stylesSet = [
    {'name': 'Mark', 'element': 'mark'},
    {'name': 'Small', 'element': 'small'},
    {'name': 'Big', 'element': 'big'},
    {'name': 'Video', 'element': 'div', attributes: {'class': 'video'}},
    { name: 'Banner', type: 'widget', widget: 'image', attributes: { 'class': 'bigBanner' } }
];

config.contentsCss = 'http://nevsedoma.com.ua/templates/nevsedoma/style/engine.css';
config.format_tags = 'p;h1;h2;h3;h4;h5;h6;address;div';

config.protectedSource.push(/<(style)[^>]*>.*<\/style>/ig);
config.protectedSource.push(/<(script)[^>]*>.*<\/script>/ig);// разрешить теги <script>
config.protectedSource.push(/<(div)[^>]*><[/]div>/ig);// разрешить теги <div>
config.protectedSource.push(/<(span)[^>]*>.*<\/span>/ig);// разрешить теги <span>
config.protectedSource.push(/<(i)[^>]*>.*<\/i>/ig);// разрешить теги <i>
config.protectedSource.push(/<!--dev-->[\s\S]*<!--\/dev-->/g);
config.allowedContent = true;
config.entities = false; //отключаем кодирование кавычек

config.extraAllowedContent = 'style script div span i a iframe';

CKEDITOR.replaceAll('ckeditor');



