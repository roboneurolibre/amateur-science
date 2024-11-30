const iframeDirective = {
    name: 'iframe2',
    doc: 'A directive for embedding iframes with customizable height.',
    arg: { type: String, doc: 'The URL to embed in the iframe' },
    options: {
      height: { 
        type: String, 
        doc: 'Height of the iframe, e.g., `400px` or `100%`.',
        default: '400px'
      },
      width: {
        type: String,
        doc: 'Width of the iframe, e.g., `100%` or `600px`.',
        default: '100%'
      }
    },
    run(data) {
      const url = data.arg;
      const height = data.options.height || '400px';
      const width = data.options.width || '100%';
      
      return [{
        type: 'html',
        value: `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowfullscreen></iframe>`
      }];
    },
  };
  
  const plugin = { 
    name: 'Iframe Embed', 
    directives: [iframeDirective] 
  };
  
  export default plugin;