<template>
    <!-- 一维码属性 -->
        <div class="barcodeProperty" style="display: none;">
            <div class="propertyTitle">
                <span class="propertyClose">一维码属性</span>
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
                <input id="currentContentBarcode" class="label currentContent" type="text" style="margin-left: 34px">
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
                <button id="barCodeHorizontalCenter" class="btn">水平位置居中</button>
                <button id="barCodeVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="barCodePlaceLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="barCodePlaceTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input class="label barcodeWidth" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-高</dt>
                <input class="label barcodeHeight" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>编码模式</dt>
                <select id="encodeMode" class="speed">
                    <optgroup label="通用条码">
                        <option value="CODE128">CODE-128 (有）</option>
                        <option value="CODE39">CODE-39 (有)</option>
                        <option value="ITF-25">ITF-25</option>
                    </optgroup>
                    <optgroup label="商品码">
                        <option value="EAN13">EAN-13 (有,输入12位)</option>
                        <option value="EAN8">EAN-8 (有,输入7位)</option>
                        <option value="UPC">UPC-A (有,输入12位)</option>
                        <option value="UPCE">UPC-E (有,输入6位)</option>
                        <option value="ISBN">ISBN</option>
                    </optgroup>
                    <optgroup label="其他条码">
                        <option value="codabar">CODABAR (有)</option>
                        <option value="CODE-93">CODE-93</option>
                        <option value="ECODE-39">ECODE-39</option>
                        <option value="ITF14">ITF-14 (有,输入13位)</option>
                        <option value="CHINA POST">CHINA POST</option>
                        <option value="MATRIX-25">MATRIX-25</option>
                        <option value="INDUSTRIAL-25">INDUSTRIAL-25</option>
                    </optgroup>
                </select>
            </dl>
            <dl class="paperInterval">
                <dt>文字位置</dt>
                <ul>
                    <li class="preliterate">无文字</li>
                    <li class="AbovebBarcode">条码上方</li>
                    <li class="isChecked belowBarcode">条码下方</li>
                </ul>
            </dl>
            <dl>
                <dt>字体名称</dt>
                <select class="speed">
                    <optgroup label="通用字体">
                        <option value="黑体">黑体</option>
                        <option value="">新宋体</option>
                        <option value="">微软雅黑</option>
                        <option value="">楷体</option>
                        <option value="">隶书</option>
                        <option value="">幼圆</option>
                        <option value="">条形码</option>
                    </optgroup>
                    <optgroup label="英文字体">
                        <option value="">Arial</option>
                        <option value="">Consolas</option>
                        <option value="">Opulent</option>
                        <option value="">Tahoma</option>
                        <option value="">Verdana</option>

                    </optgroup>
                    <optgroup label="嘻哈字体">
                        <option value="">嘟嘟简体</option>
                        <option value="">哈哈简体</option>
                        <option value="">胖头鱼简体</option>
                        <option value="">少女简体</option>
                        <option value="">卡通简体</option>
                        <option value="">少儿简体</option>
                        <option value="">娃娃篆体</option>
                        <option value="">丫丫简体</option>
                        <option value="">细等线简体</option>
                        <option value="">稚艺简体</option>
                    </optgroup>
                </select>
            </dl>
            <dl class="paperInterval addSubtract">
                <dt>字体大小</dt>
                <span>小六</span>
                <ul>
                    <li class="shrink">-</li>
                    <li class="magnify">+</li>
                </ul>
            </dl>
            <dl class="paperInterval">
                <dt>文本对齐</dt>
                <ul class="textAlign">
                    <li>居左</li>
                    <li class="isChecked">居中</li>
                    <li>居右</li>
                    <li>拉伸</li>
                </ul>
            </dl>
            <dl>
                <dt>粗体</dt>
                <dd class="selectorSwitch barcodeBoldface"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>斜体</dt>
                <dd class="selectorSwitch barcodeItalic"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>下划线</dt>
                <dd class="selectorSwitch barcodeUnderline"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>删除线</dt>
                <dd class="selectorSwitch barcodeStrickout"><img src="images/off.png" alt=""></dd>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch barcodeParticipatePrint"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
