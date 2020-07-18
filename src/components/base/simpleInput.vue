<template>
    <div class="simple-input">
        <input 
            type="text"
            :value="val"
            @input="updateValueOfInput"
            ref="simpleInput"
            class="form-control"
            placeholder="Type in english please..."
        >
    </div>
</template>

<script>
export default {
    name: 'simpleInput',
    data: () => {
        return {
            val: ''
        }
    },
    props: {
        value: {
            type: String,
            required: true            
        }
    },

    methods: {
        updateValueOfInput () {
            const updateVal = this.$refs.simpleInput.value
            this.$emit('input', updateVal)
        }
    }
}
</script>

<style scoped>

</style>