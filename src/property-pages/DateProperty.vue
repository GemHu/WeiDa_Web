<template>
    <!--日期属性-->
        <div class="dateProperty" style="display: none">
            <div class="propertyTitle">
                <span class="propertyClose">日期属性</span>
            </div>
            <dl>
                <dt>日期格式</dt>
                <select id="dateFormat" class="speed">
                    <option value="yyyy年MM月dd日">yyyy年MM月dd日</option>
                    <option value="yyyy年MM月">yyyy年MM月</option>
                    <option value="MM月dd日">MM月dd日</option>
                    <option value="yyyy-MM-dd">yyyy-MM-dd</option>
                    <option value="yyyy-MM">yyyy-MM</option>
                    <option value="MM-dd">MM-dd</option>
                    <option value="yyyy/MM/dd">yyyy/MM/dd</option>
                    <option value="yyyy/MM">yyyy/MM</option>
                    <option value="MM/dd">MM/dd</option>
                    <option value="MM-dd-yyyy">MM-dd-yyyy</option>
                    <option value="dd-MM-yyyy">dd-MM-yyyy</option>
                </select>
            </dl>
            <dl>
                <dt>时间格式</dt>
                <select id="timeFormat" class="speed">
                    <option value="无">无</option>
                    <option value="hh:mm:ss">hh:mm:ss</option>
                    <option value="hh:mm">hh:mm</option>
                    <option value="mm:ss">mm:ss</option>
                </select>
            </dl>
            <dl class="paperInterval addSubtract">
                <dt>日期偏移</dt>
                <span id="dateMigration">无</span>
                <ul>
                    <li class="forward">-</li>
                    <li class="backwards">+</li>
                </ul>
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
                <button id="dateHorizontalCenter" class="btn centerBtn">水平位置居中</button>
                <button id="dateVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="dateLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="dateTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input class="label dateWidth" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-高</dt>
                <input class="label dataHeight" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>字体名称</dt>
                <!--<dd>黑体 ></dd>-->
                <select id="fontName" class="speed">
                    <optgroup label="通用字体">
                        <option value="黑体">黑体</option>
                        <option value="新宋体">新宋体</option>
                        <option value="微软雅黑">微软雅黑</option>
                        <option value="楷体">楷体</option>
                        <option value="隶书">隶书</option>
                        <option value="幼圆">幼圆</option>
                        <option value="条形码">条形码</option>
                    </optgroup>
                    <optgroup label="英文字体">
                        <option value="Arial">Arial</option>
                        <option value="Consolas">Consolas</option>
                        <option value="Opulent">Opulent</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Verdana">Verdana</option>
                    </optgroup>
                    <optgroup label="嘻哈字体">
                        <option value="duduFont">嘟嘟简体</option>
                        <option value="hahaFont">哈哈简体</option>
                        <option value="fatfishFont">胖头鱼简体</option>
                        <option value="maidFont">少女简体</option>
                        <option value="cartoonFont">卡通简体</option>
                        <option value="childFont">少儿简体</option>
                        <option value="moppetFont">娃娃篆体</option>
                        <option value="yayaFont">丫丫简体</option>
                        <option value="cablelightFont">细等线简体</option>
                        <option value="zhiyiFont">稚艺简体</option>
                    </optgroup>
                </select>
            </dl>
            <dl class="paperInterval addSubtract" id="dateWordSize">
                <dt>字体大小</dt>
                <select id="dateFontSize" class="speed">
                    <!--<option value="4">4</option>-->
                </select>
                <ul>
                    <li id="fontDecrease">-</li>
                    <li id="fontIncrease">+</li>
                </ul>
            </dl>
            <!--<dl class="paperInterval">-->
            <!--<dt>水平对齐</dt>-->
            <!--<ul>-->
            <!--<li class="isChecked">居左</li>-->
            <!--<li>居中</li>-->
            <!--<li>居右</li>-->
            <!--<li>拉伸</li>-->
            <!--</ul>-->
            <!--</dl>-->
            <dl>
                <dt>粗体</dt>
                <dd class="selectorSwitch dateBoldType"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>斜体</dt>
                <dd class="selectorSwitch dateItalic"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>下划线</dt>
                <dd class="selectorSwitch dateUnderline"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>删除线</dt>
                <dd class="selectorSwitch dateStrikethrough"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
