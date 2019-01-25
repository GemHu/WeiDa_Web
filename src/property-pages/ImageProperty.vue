<template>
    <!--图片属性-->
        <div class="imgProperty" style="display: none;">
            <div class="propertyTitle">
                <span class="propertyClose">图片属性</span>
            </div>
            <dl class="printDirection">
                <dt>打印方向</dt>
                <ul>
                    <li class="isChecked zeroDegree">0°</li>
                    <li class="ninetyDegree">90°</li>
                    <li class="oneHuEightyDegree">180°</li>
                    <li class="twoHuSeventyDegree">270°</li>
                </ul>
            </dl>
            <dl>
                <dt>位置大小</dt>
                <button id="imgHorizontalCenter" class="btn centerBtn">水平位置居中</button>
                <button id="imgVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="imgLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="imgTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input class="label imgWidth" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-高</dt>
                <input class="label imgHeight" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>图片文件</dt>
                <dd id="filePath">9E8832</dd>
            </dl>


            <dl class="paperInterval lineFeed">
                <dt>颜色模式</dt>
                <ul id="colorMode" class="ulBreadth">
                    <li>原始颜色</li>
                    <li>256灰度</li>
                    <li class="isChecked">黑白双色</li>
                    <li>半色调</li>
                </ul>
            </dl>
            <dl>
                <dt>平铺显示</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
