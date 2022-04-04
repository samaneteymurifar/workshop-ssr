// const { version } = require('os')
const path=require('path')

module.exports={

    // یعنی این در سمت سرور برای نود اجرا میشه
    target:"node",

    // فایل ورودی که می خواهیم به  اکمااسکریپت5 تبدیل بشه
    entry:'./src/index.js',
    mode:'development',
    
   
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                options:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{targets:{browsers:['last 2 versions']}}]
                    ]
                }
            }
        ]
    }

}