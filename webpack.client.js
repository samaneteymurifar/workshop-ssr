// const { version } = require('os')
const path=require('path')

module.exports={

    // فایل ورودی که می خواهیم به  اکمااسکریپت5 تبدیل بشه
    entry:'./src/client/client.js',

    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'public')
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