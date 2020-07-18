<template>
    <div class="base-email-input">
    <input
        ref="emailUpdate"
        :value="val"
        @input="updateEmailValue"
        class="form-control" 
        id="InputEmail1" 
        aria-describeby="emailHelp" 
        placeholder="Enter email"
        >
    </div>
</template>

<script>
export default {
    name: 'baseEmaildInput',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data: () => {
        return {
            val: ''
        }
    },
    methods: {
        updateEmailValue () {
            const upDatedValue = this.$refs.emailUpdate.value
            this.$emit('input', upDatedValue)
        }
    }
}
</script>