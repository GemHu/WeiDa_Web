<template>
    <!--矩形属性-->
        <div class="rectProperty" style="display: none;">
            <div class="propertyTitle">
                <span class="propertyClose">矩形属性</span>
            </div>
            <dl class="paperInterval">
                <dt>矩形形状</dt>
                <ul id="rectShape">
                    <li class="isChecked">直角矩形</li>
                    <li>圆角矩形</li>
                    <li>椭圆</li>
                    <li>圆</li>
                </ul>
            </dl>
            <dl>
                <dt>内部填充</dt>
                <dd class="selectorSwitch infill"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>线条宽度</dt>
                <input class="label rectLineWidth" type="text" required="required">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置大小</dt>
                <button id="rectHorizontalCenter" class="btn centerBtn">水平位置居中</button>
                <button id="rectVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="rectLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="rectTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input class="label rectWidth" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-高</dt>
                <input class="label rectHeight" type="text">
                <span class="millimeter">毫米</span>
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
