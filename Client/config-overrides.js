const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireCssModules = require('react-app-rewire-css-modules');
  
module.exports = function override(config, env) {
    config = rewireCssModules(config, env);
    config = injectBabelPlugin(['import', {libraryName: 'antd',style: true}], config); 
    config = rewireLess.withLoaderOptions({
      modifyVars: {
        "@primary-color":"#FF2219"
        //variables: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      },
    })(config, env);
  
    
    return config;
}