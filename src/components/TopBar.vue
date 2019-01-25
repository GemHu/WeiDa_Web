<template>
    <!--工具条-->
    <div class="toolbar">
        <dl id="newConstruction">
            <dt><img src="images/new_construction.png" alt=""></dt>
            <dd>新建</dd>
        </dl>
        <dl class="taggedTemplatesIcon">
            <dt><img src="images/template.png" alt=""></dt>
            <dd>标签模板</dd>
            <!--模板内容-->

            <div id="taggedTemplates" style="display: none;">
                <div class="templatesHeader">
                    <span id="templatesClose" class="goBack"> < 关闭</span>
                    <h3 id="bq_mb">标签模板</h3>
                    <span id="deTongElectron" style="color: #17e317;visibility: hidden;">德佟电子</span>
                </div>
                <div class="catalogue">
                    <ul>
                        <li class="LocalDirectory pitchCatalogue">本地目录 <i></i></li>
                        <li class="magnifying"><img src="images/magnifyingGlass.png" alt=""></li>
                        <li class="cloudDirectoryHeadline">云目录 <span></span></li>
                    </ul>
                </div>
                <!--目录内容显示-->
                <div class="catalogueContent">
                    <!--本地目录-->
                    <div class="LocalDirectoryMain">
                        <ul id="LocalDirectoryList">
                        </ul>
                    </div>

                    <!--云目录-->
                    <div class="cloudDirectory" style="display: none;">
                        <!--云目录 登录-->
                        <div class="register">
                            <form id="myform" name="myform" method="post">
                                <input type="text" name="username" value="蔡俊杰" placeholder="厂商名称/用户名称/电话号码" autofocus
                                       required/>
                                <!--<input type="text" value="德佟电子" placeholder="厂商名称/用户名称/电话号码" name="name" autofocus required/>-->
                                <input type="text" placeholder="登录密码" value="" name="password">
                                <!--<input type="text" placeholder="登录密码" name="name">-->
                                <p>空密码表示公开访问厂商的云目录标签模板</p>
                                <button id="registerBtn">登录</button>
                                <!--<input type="submit" value="登录">-->
                            </form>
                        </div>
                        <!--云目录-->
                        <div class="cloudDirectoryMain" style="display: none;">
                            <div class="usersList">
                                <ul>
                                    <!--<li>德佟@超市</li>-->
                                </ul>
                            </div>
                            <!--右边显示图标内容-->
                            <div class="cloudDirectoryImg">
                                <ul>
                                    <span id="loading">加载中......</span>
                                    <!--<img id="loading" src="images/loading-1.gif">-->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--模板内容 end-->

            <!--德佟电子，厂商名称，电话等-->
            <div id="deTongMessage" style="display: none;">
                <div class="templatesHeader">

                    <span class="goBack" id="goBackTemplate"> < 返回</span>
                    <!--<span style="color: #17e317;">德佟电子</span>-->
                    <h3>德佟电子</h3>
                    <span id="templateName" style="color: #17e317;">德佟@超市</span>
                    <!--<span id="templatesClose">关闭</span>-->
                </div>

                <!--厂商信息，刷新列表，退出登录-->
                <div class="manufacturer">
                    <!--厂商信息-->
                    <div class="vendorInformation">
                        <p>厂商名称<span>德佟电子</span></p>
                        <p>厂商电话<span>4008236599</span></p>
                    </div>

                    <!--标签模板名称-->
                    <div class="templateList">
                        <dl>
                            <dt>德佟@超市</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@电信</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@联通</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@铁塔</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@通用</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@移动</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@银行</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                        <dl>
                            <dt>德佟@珠宝</dt>
                            <dd>未填写用户电话</dd>
                            <span> > </span>
                        </dl>
                    </div>

                    <!--刷新标签模板列表-->
                    <div class="renovate">
                        <p>刷新标签模板列表</p>
                    </div>

                    <!--退出登录-->
                    <div class="logOut">
                        <p>退出登录</p>
                    </div>

                </div>
            </div>
        </dl>
        <!--<dl>-->
        <!--<dt><img src="images/open.png" alt=""></dt>-->
        <!--<dd>打开</dd>-->
        <!--</dl>-->
        <dl id="save">
            <dt><img src="images/save.png" alt=""></dt>
            <dd>保存</dd>
        </dl>
        <dl>
            <dt><img src="images/save_as.png" alt=""></dt>
            <dd>另存为</dd>
        </dl>
        <dl class="copy">
            <dt><img src="images/copy.png" alt=""></dt>
            <dd>拷贝</dd>
        </dl>
        <dl>
            <dt><img src="images/lock.png" alt=""></dt>
            <dd>锁定</dd>
        </dl>
        <dl>
            <dt><img src="images/uploading.png" alt=""></dt>
            <dd>上传</dd>
        </dl>

        <!--工具条右侧-->
        <ul>
            <li class="magnify"><img class="wordSize" src="images/magnify.png" alt="放大" title="增大一维码字号"></li>
            <li class="shrink"><img class="wordSize" src="images/shrink.png" alt="" title="减小一维码字号"></li>
            <li id="undo"><img src="images/revocation.png" style="background-color: #26587d;" alt="" title="撤销"></li>
            <li id="redo"><img src="images/reform.png" style="background-color: #26587d;" alt="" title="重做"></li>
            <li id="print"><img src="images/print.png" style="background-color: #26587d;" alt="" title="打印"></li>
            <li class="deleteLast"><img id="deleteCanvasSel" class="opt" src="images/trash.png" alt="" title="删除"></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
