# stack-slider
# Author: Dipesh thapa
# Author Site: http://dpes.com.np/

An experimental image slider that flips through images in 3D. Four stacks resemble image piles where images will be lifted off from and rotated to the front for viewing.

Watch Demo at http://dpes.com.np/demo.html
           or https://www.jqueryscript.net/slider/3D-Stack-Card-Slider.html
           
Settings
<table>
<thead>
<tr>
	<th>Option</th>
	<th>Type</th>
	<th>Default</th>
	<th>Description</th>
</tr>
<tr>
	<td>autoPlay</td>
	<td>boolean</td>
	<td>true</td>
	<td>Enables auto play of slides</td>
</tr>
<tr>
	<td>autoPlaySpeed</td>
	<td>int</td>
	<td>3000</td>
	<td>Auto play change interval</td>
</tr>
<tr>
	<td>arrows</td>
	<td>boolean</td>
	<td>true</td>
	<td>Enable Next/Prev arrows</td>
</tr>
<tr>
	<td>drag</td>
	<td>boolean</td>
	<td>true</td>
	<td>Enables desktop dragging</td>
</tr>
<tr>
	<td>dots</td>
	<td>boolean</td>
	<td>true</td>
	<td>Current slide indicator dots</td>
</tr>
</tbody></table>

Example
Initialize with:

$( "#slider" ).stack_slider({
	autoPlaySpeed: 3000,
	autoPlay: true,
	dots: true,
	arrows: true,
	drag: false
});
