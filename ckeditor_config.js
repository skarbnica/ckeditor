var uploadUrl = (filebrowserUploadUrl === undefined) ? '' : filebrowserUploadUrl;
config = CKEDITOR.config;

// Define the toolbar groups as it is a more accessible solution.
config.protectedSource = [];
config.filebrowserUploadUrl = uploadUrl;
config.removePlugins = 'image';
config.extraPlugins = 'justify,font,image2,uploadimage,stylesheetparser,iframe';
config.customConfig = null; // remove default config
config.toolbar = [
    {name: 'document', items: ['Source']},
    {name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
    {
        name: 'paragraph',
        items: ['NumberedList', 'BulletedList', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-']
    },
    {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat']},
    {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
    {name: 'insert', items: ['Image', 'Table', 'HorizontalRule']},
    {name: 'styles', items: ['Styles', 'Format']},
    {name: 'tools', items: ['Maximize']},
    {name: 'about', items: ['About']}
];

config.stylesSet = [
    {'name': 'Mark', 'element': 'mark'},
    {'name': 'Small', 'element': 'small'},
    {'name': 'Big', 'element': 'big'},
    {'name': 'Video', 'element': 'div', attributes: {'class': 'video'}},
    {'name': 'Gallery', 'element': 'div', attributes: {'class': 'gallery'}},
    {'name': 'Block', 'element': 'div', attributes: {'class': 'block'}},
    {'name': 'Block left', 'element': 'div', attributes: {'class': 'block block-left'}},
    {'name': 'Block right', 'element': 'div', attributes: {'class': 'block block-right'}},
    {'name': 'Block center', 'element': 'div', attributes: {'class': 'block block-center'}},
    {name: 'Banner', type: 'widget', widget: 'image', attributes: {'class': 'bigBanner'}}
];

config.format_tags = 'p;h1;h2;div';

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
