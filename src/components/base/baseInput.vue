<template>
    <div class="base-input">
    <input
        style="margin-top: 10px;"
        :value='value'
        @input="$emit('input', $event.target.value)"
        class="form-control" 
        aria-describeby="emailHelp" 
        :placeholder="placeholder"
        :type="type"
        >
    </div>    
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        value: {
            type: null,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    methods: {
        updateInputProps () {

        }
    }
}
</script>
<style scoped>

</style>