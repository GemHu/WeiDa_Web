<template>
    <!--画布属性-->
        <div class="property drag">
            <div class="propertyTitle">
                <span class="propertyClose">属性</span>
            </div>
            <dl>
                <dt>标签名称</dt>
                <input class="label" id="labelName" type="text" value="新建标签_1">
            </dl>
            <dl>
                <dt>标签宽度</dt>
                <input id="labelWidth" class="label" type="text" placeholder="范围:1~1000">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>标签高度</dt>
                <input id="labelHeight" class="label" type="text" placeholder="范围:1~1000">
                <span class="millimeter">毫米</span>
            </dl>
            <dl class="printDirection">
                <dt>打印方向</dt>
                <ul>
                    <li class="isChecked zeroDegree">0°</li>
                    <li class="ninetyDegree">90°</li>
                    <li class="oneHuEightyDegree">180°</li>
                    <li class="twoHuSeventyDegree">270°</li>
                </ul>
            </dl>
            <dl class="paperInterval">
                <dt>纸张间隔</dt>
                <ul>
                    <li>连续纸</li>
                    <li>定位孔</li>
                    <li class="isChecked">间隙纸</li>
                    <li>黑标纸</li>
                </ul>
            </dl>
            <dl>
                <dt>间隔长度</dt>
                <input class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>旗型标签</dt>
                <dd id="flagShaped"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl class="backgroundPic">
                <dt>背景图片</dt>
                <button class="btn selectImg">选择图片</button>
                <button id="clearBackground" class="btn">清除背景</button>
                <input type="file" id="chooseBackgroundImg"/>
            </dl>
            <dl class="dataContent">
                <dt>数据内容</dt>
                <button class="btn selectFile">选择文件</button>
                <button class="btn">清除数据</button>
            </dl>
            <dl>
                <dt>打印浓度</dt>
                <select class="concentration">
                    <option value="随机打印">随机打印</option>
                    <option value="">6(正常)</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10(较浓)</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15(最浓)</option>
                </select>
            </dl>
            <dl>
                <dt>打印速度</dt>
                <select class="speed">
                    <option value="随机打印">随机打印</option>
                    <option value="">1(最慢)</option>
                    <option value="">2(较慢)</option>
                    <option value="">3(正常)</option>
                    <option value="">4(较快)</option>
                    <option value="">5(最快)</option>
                </select>
            </dl>
            <dl>
                <dt>水平偏移</dt>
                <input class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>垂直偏移</dt>
                <input class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>锁定标签</dt>
                <dd id="lockLabel" class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
