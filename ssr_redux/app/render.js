export default (html, data) =>
  `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>服务段渲染测试</title>
        <link rel='stylesheet' type='text/css' href='/css/main.css' />
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
          window.INITIAL_STATE =${JSON.stringify(data)}
        </script>
        <script src="/js/bundle.js"></script>
    </body>
</html>
`;
