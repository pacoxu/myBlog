我们知道，通过CSS动画，我们只需要设置div一开始的height，和最后的height就可以很容易实现高度变化的动画效果。代码如下：

	#div0 {
	  transition: height 1s;
	  height: 100px;
	  background-color: #f00;
	  color:white;
	}
	
	#div0:hover {
	  height: 200px;
	}

<div id="div0">I'm div0. Hover me!</div>

但假如我们有一个div，div里有若干个元素，我们希望div能够自动适应这些元素，调整到合适的高度。

那么难题来了，由于无法确定这些元素总的高度是多少，因此我们也就无法设定height的值，并且我们也不能把height设置能auto，因为如果设置成auto，CSS动画就会不起作用。如下：

	#div1 {
	  transition: height 1s;
	  background: #f00;
	  height: 100px;
	  padding: 20px;
	  overflow: hidden;
	  color:white;
	}
	
	#div2 {
	  background: #00f;
	  height: 200px;
	}
	
	#div1:hover {
	  height: auto;
	}

<div id="div1">I'm div1. Hover me. My transition property is height and my height is auto, so it doesn't works.<div id="div2"></div></div>


但是这里我们有一个很简单、很tricky的方法，那就是在将height设置为auto的同时，设置max-height的值。
通过设定一个非常高的max-height，div就会自动适应其内部元素的高度，同时会产生动画效果。如下：
	
	#div3 {
	  transition: max-height 1s;
	  background: #f00;
	  max-height: 100px;
	  height:auto;
	  padding: 20px;
	  overflow: hidden;
	}
	
	#div4 {
	  background: #00f;
	  height: 200px;
	}
	
	#div3:hover {
	  max-height: 999px;
	}
	
<div id="div3">I'm div3. Hover me. My transition property is max-height and my height is auto. It works well.<div id="div4"></div></div>