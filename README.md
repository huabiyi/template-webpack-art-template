# 【必看】
# 模板说明
- 此模板目前只适用于放于 同个服务器下 的 同套样式 的 多语言 或者 多页面专题
- 暂不适用打包资源路径需要用相对路径的，如需要用相对路径者需自行修改配置

# {-项目配置修改说明-}
- 首先先确认 专题的名字、专题的端数、当前专题使用的年份（默认自动获取当前制作时间的年份）
    1. 指路 [config -> webpack.params.js](./configs/webpack.params.js)<br/>
    1. 将 ztName 的值替换成专题的名字<br/>
    1. 将 side 中多余的端数删除即可，即 只有PC，删除 m 跟 n，三端的情况则不用改动
    1. 如不能直接使用默认获取的年份，则需要将 year 的值设置成需要的年份，格式：例2022年：2022

<br/>

- 确认页面个数
    1. 如有多个页面的情况，则 需要在 src 目录下建立对应的art文件，在 跟src同级的data文件夹中建立js文件，在src/js/entry文件夹下建立对应的入口js文件<br>
    1. 上述是哪个文件夹中的文件名，需要一一对应，例 src/index.art，data/index.js, src/js/entry/index.js

<br/>

- 确认有多少个语言版本，需要做对应的增、删
    1. 语言修改[data/index.js](./data/index.js)<br/>
    1. 目前配置了 en:英文，ja：日文，ko：韩文

# 打包文件&gitlab存放位置说明
> 测试环境打包  npm run dist
> 正式环境打包  npm run release
> 会分别生成dist包跟release包

- 目录结构大致如下
```
dist/release
    |-- img
    |-- js
    |-- css
    |-- data
    |-- en/ja/ko
```
### gitlab存放说明
1. 将以上文件分成两部分，{+资源文件夹（img、js、css、data等）、HTML文件夹（en/ja/ko）+}
1. 在专题的gitlab上的res文件夹中，找到当前专题对应的年份（如果没有需要创建），创建对应的专题使用的文件夹（{-名字跟上面的 ztName 一致-}），将资源文件夹复制过去（{+ 如果是替换的情况下，需要先将此文件夹中原有的文件删除，再粘贴，文件带hash值，不删除会越来越多 +}）
1. 剩下的html文件夹，将所有文件夹复制，直接粘贴到gitlab上跟res同级的目录即可（{+替换的时候不需要删除原有的+}）

# art 使用方式
- [官方文档：http://aui.github.io/art-template/zh-cn/docs/index.html](http://aui.github.io/art-template/zh-cn/docs/index.html)
## 特殊说明
- 数据格式不能使用一些常用字段，例如：title，description，等