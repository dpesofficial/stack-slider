<h1>🆂🆃🅰🅲🅺 🆂🅻🅸🅳🅴🆁 <br/>
🅱🆈: 🅳🅸🅿🅴🆂🅷 🆃🅷🅰🅿🅰</h1>

<h4># Author Site: http://dpes.com.np/</h4>

An experimental image slider that flips through images in 3D. Four stacks resemble image piles where images will be lifted off from and rotated to the front for viewing.

Watch Demo at https://dpesofficial.github.io/stack-slider/
           
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
<tr>
	<td>direction</td>
	<td>string</td>
	<td>'direction: hozizontal'</td>
	<td>Sets direction of slider either vertical or horizontal <br/> 
		For vertical layout set 'direction: vertical'</td>
</tr>
</tbody></table>


<h4> Example </h4>
Initialize with:

<pre>
<span class="pl-en">$</span>("#slider").<span class="pl-en">stack_slider</span>({
  autoPlaySpeed<span class="pl-k">:</span> <span class="pl-c1">3000</span>,
  autoPlay<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  dots<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  arrows<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  drag<span class="pl-k">:</span> <span class="pl-c1">true</span>
});
</pre>
