import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '知识库',
    logo: '/logo.png',
    footer: '<a href="http://www.hzydhl.cn/" style="color: black" target="_blank">惠州一点互联科技有限公司 版权所有 Copyright (c) 2024粤ICP备19037595号</a>',
    editLink: 'https://codeup.aliyun.com/6082ade3c7972588ac3637a9/assist/hzyd-dev-wiki/blob/66eadb1f7da1cc20cf4df6bc73944a3b7aa56623/{filename}',
    socialLinks: {
      github: 'https://codeup.aliyun.com/6082ade3c7972588ac3637a9/assist/hzyd-dev-wiki.git',
    },
    lastUpdated: true,
    showLineNum: true,
    nprogress: true,
  },
});
