<script scoped>
const stud = [
    {
        name: "kai",
        age: "22",
        course: "BSIT"
    }, {
        name: "kai",
        age: "22",
        course: "BSIT"
    }, {
        name: "kai",
        age: "22",
        course: "BSIT"
    }
];

console.log(stud)
</script>

<template>
    <div>
        <ul class="border">
            <li class="block text-black" v-for="(c, i) in stud" :key="i">
                {{ c.name }}
                {{ c.age }}
                {{ c.course }}
            </li>
        </ul>
    </div>
</template>