# List Index และการเข้าถึง (access) ข้อมูลใน List

```python
scores = [60, 70, 85, 66, 70, 0, 15, 9]
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
```

-   ข้อมูลที่เก็บอยู่ใน List จะมีเลขลำดับกำกับอยู่ ซึ่งเลขลำดับดังกล่าวเรียกว่า Index
-   Index ของ List ในภาษา Python เริ่มต้นที่ 0
-   Index เพิ่มทีละ 1 ตามจำนวนข้อมูลที่อยู่ใน List

<img class="image" src="https://elab.cpe.ku.ac.th/elab_media/supplements/2018/03/28/ListIndex.png" />

## วิธีการเข้าถึง (access) ข้อมูลใน List โดยใช้ Index

-   ใส่เลข Index ไว้ใน bracket (\`[]\`) หลังชื่อตัวแปร List เพื่อเข้าถึงข้อมูลใน List ณ Index ที่ต้องการ

```python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ 2 เก็บเข้าตัวแปร score
score = scores[2]

print(score)
```

```python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ 1 รวมกับค่า ณ Index ที่ 4 เก็บเข้าตัวแปร score
score = scores[1] + scores[4]

print(score)
```

```python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

# ต้องการค่า วันที่ 3 ของสัปดาห์ จาก List days (วันที่ 3 ตรงกับ Index ที่ 2 เพราะ Index เริ่มต้นที่ 0)
print(days[2])  # ค่าที่ได้มา เป็น string
```

## วนลูปข้อมูลใน List โดยใช้ index

```python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
index = 0
while index < 6:
    day = days[index]
    print(index, "days[%d]: %s" % (index, day))
    index += 1
```

## แบบฝึกหัด

1. ประกาศ List ของจำนวนเฉพาะ ให้ชื่อตัวแปรว่า \`primes\` โดยมีข้อมูลเป็นจำนวนเฉพาะ 10 จำนวนแรก  
   คำนวณหาผลรวมของจำนวนเฉพาะทั้ง 10 จำนวน โดยใช้ while loop เก็บผลรวมใส่ในตัวแปร \`total\`

<div>
<problem><id>001</id><hidemultiple>primes = [2,3,5,7,11,13,17,19,23,29]
index = 0</hidemultiple><code>total = 0</code><code>while<hideinline>index < len(primes):</hideinline></code><hidemultiple>total += primes[index]
index += 1</hidemultiple><code>print(total)</code></problem>
</div>

2. กำหนด List \`months\` และ \`days_in_month\` เป็น List ของตัวย่อชื่อเดือน และ List ของจำนวนวันในแต่ละเดือนตามลำดับ  
   ให้แสดง 12 บรรทัด ว่าแต่ละเดือนมีกี่วัน โดยใช้ while loop โดยแสดงชื่อเดือนและจำนวนวัน คั่นด้วยช่องว่าง

<div>
<problem><id>002</id><code>months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']</code>
<code>days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]</code><blank>index = 0</blank><code>while <hideinline>index < len(months):</hideinline></code>
<hidemultiple>print(months[index],days_in_month[index])
index += 1</hidemultiple>
</problem>
</div>

## Index เป็นค่าลบได้

```python
scores = [60, 70, 85, 66, 70, 0, 15, 9]
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
```

-   Index ของ List ในภาษา Python เป็นค่าลบได้ โดยค่าสุดท้ายของ List เป็น -1

<img class="image" src="https://elab.cpe.ku.ac.th/elab_media/supplements/2018/03/28/ListNegativeIndex.png"/>

## วิธีการเข้าถึง (access) ข้อมูลใน List โดยใช้ Index

-   ใส่เลข Index ไว้ใน bracket (\`[]\`) หลังชื่อตัวแปร List เพื่อเข้าถึงข้อมูลใน List ณ Index ที่ต้องการ

```python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ -2 เก็บเข้าตัวแปร score
score = scores[-2]

print(score)
```

```python
scores = [60, 70, 85, 66, 70, 0, 15, 9]

# ต้องการค่าใน List scores ณ Index ที่ -1 รวมกับค่า ณ Index ที่ -4 เก็บเข้าตัวแปร score
score = scores[-1] + scores[-4]

print(score)
```

```python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

# ต้องการค่า วันที่ 3 ของสัปดาห์ จาก List days (วันที่ 3 ตรงกับ Index ที่ -5)
print(days[-5])  # ค่าที่ได้มา เป็น string
```

## ระวังการเข้าถึงค่า ณ Index ที่ไม่มีใน List

```python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
print(days[-8])  # ไม่มี Index ที่ -8
```

```python
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
i = 0
while i <= 7:
    print(days[i])  # ไม่มี Index ทึ่ 7
```

## แบบฝึกหัด

1. ประกาศ List ของจำนวนเฉพาะ ให้ชื่อตัวแปรว่า primes โดยมีข้อมูลเป็นจำนวนเฉพาะ 10 จำนวนแรก

<input type="text" ans="primes = [2,3,5,7,11,13,17,19,23,29]" id="003"  />

2. ประกาศ List ของข้อมูลใด ๆ ให้ชื่อตัวแปรว่า data โดยมีข้อมูล 15 ตัว

<input type="text" ans="data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" id="004"  />

3. ประกาศ List ของที่เก็บข้อมูลเดือนทั้ง 12 เดือนใน 1 ปี (ตั้งแต่มกราคม ถึง ธันวาคม ตามลำดับ) ให้ชื่อตัวแปรว่า months โดยเก็บชื่อเดือน 3 ตัวแรกของแต่ละเดือนเป็นตัวพิมพ์ใหญ่ทั้งหมด (เช่น JAN สำหรับเดือนมกราคม)

<input type="text" ans='months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]' id="005"  />
<MDInput id="005" />
