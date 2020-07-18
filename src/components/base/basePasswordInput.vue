<template>
<div>
    <div class="base-login-input">
    <input
        :value="val"
        ref="passwordUpdate"
        @input="updatePasswordValue"
        type="password" 
        class="form-control" 
        id="InputPassword1" 
        placeholder="Password"
        >
    </div>
    </div>
</template>

<script>
export default {
    name: 'basePasswordInput',
    props: {
        value: {
            type: String,
        }
    },
    data: () => {
        return {
           val: ''
        }
    },
    methods: {
        updatePasswordValue () {
            const updatedValue = this.$refs.passwordUpdate.value
            this.$emit('input', updatedValue )
        }
    }

}
</script>