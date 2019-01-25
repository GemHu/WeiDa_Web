<template>
    <!--文本属性-->
        <div class="textProperty drag" style="display: none;">
            <div class="propertyTitle">
                <span class="propertyClose">文本属性</span>
            </div>
            <dl class="paperInterval">
                <dt>数据类型</dt>
                <ul>
                    <li class="isChecked">手工输入</li>
                    <li>递变数据</li>
                    <li>Excel数据</li>
                </ul>
            </dl>
            <dl>
                <dt>当前内容</dt>
                <input id="currentContentText" class="label currentContent" type="text" value="" placeholder="请输入文本内容">
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

            <dl>
                <dt>位置大小</dt>
                <button id="textHorizontalCenter" class="btn">水平位置居中</button>
                <button id="textVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="textPlaceLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="textPlaceTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input id="textPlaceWidth" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl class="paperInterval addSubtract">
                <dt>字间距</dt>
                <span class="wordSpace">0.00</span>
                <b>毫米</b>
                <ul>
                    <li class="wordSpaceShrink">-</li>
                    <li class="wordSpaceMagnify">+</li>
                </ul>
            </dl>
            <dl class="paperInterval lineFeed">
                <dt>行间距</dt>
                <ul class="ulBreadth LineSpacing">
                    <li class="isChecked">1.0倍</li>
                    <li>1.2倍</li>
                    <li>1.5倍</li>
                    <li>2.0倍</li>
                    <li>自定义</li>
                </ul>
            </dl>
            <dl>
                <dt>自动换行</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>自动计算高度</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>字体名称</dt>
                <!--<input class="label" type="text" placeholder="黑体">-->
                <select id="textFontName" class="speed">
                    <!--<optgroup label="通用字体">-->
                        <!--<option value="SimHei">黑体</option>-->
                        <!--<option value="NSimSun">新宋体</option>-->
                        <!--<option value="Microsoft YaHei">微软雅黑</option>-->
                        <!--<option value="KaiTi">楷体</option>-->
                        <!--<option value="LiSu">隶书</option>-->
                        <!--<option value="YouYuan">幼圆</option>-->
                        <!--<option value="条形码">条形码</option>-->
                    <!--</optgroup>-->
                    <!--<optgroup label="英文字体">-->
                        <!--<option value="Arial">Arial</option>-->
                        <!--<option value="Consolas">Consolas</option>-->
                        <!--<option value="Opulent">Opulent</option>-->
                        <!--<option value="Tahoma">Tahoma</option>-->
                        <!--<option value="Verdana">Verdana</option>-->
                    <!--</optgroup>-->
                    <!--<optgroup label="嘻哈字体">-->
                        <!--<option value="duduFont">嘟嘟简体</option>-->
                        <!--<option value="hahaFont">哈哈简体</option>-->
                        <!--<option value="fatfishFont">胖头鱼简体</option>-->
                        <!--<option value="maidFont">少女简体</option>-->
                        <!--<option value="cartoonFont">卡通简体</option>-->
                        <!--<option value="childFont">少儿简体</option>-->
                        <!--<option value="moppetFont">娃娃篆体</option>-->
                        <!--<option value="yayaFont">丫丫简体</option>-->
                        <!--<option value="cablelightFont">细等线简体</option>-->
                        <!--<option value="zhiyiFont">稚艺简体</option>-->
                    <!--</optgroup>-->
                </select>


            </dl>
            <dl class="paperInterval addSubtract">
                <dt>字体大小</dt>
                <span>小五</span>
                <ul>
                    <li class="decreaseFontSize">-</li>
                    <li class="increaseFontSize">+</li>
                </ul>
            </dl>
            <dl class="paperInterval">
                <dt>水平对齐</dt>
                <ul class="horizontalAlignment">
                    <li class="isChecked">居左</li>
                    <li>居中</li>
                    <li>居右</li>
                    <li>拉伸</li>
                </ul>
            </dl>
            <dl>
                <dt>粗体</dt>
                <dd class="selectorSwitch boldType"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>斜体</dt>
                <dd class="selectorSwitch italic"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>下划线</dt>
                <dd class="selectorSwitch underline"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>删除线</dt>
                <dd class="selectorSwitch strikethrough"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
