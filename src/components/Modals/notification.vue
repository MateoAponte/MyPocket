<template>
    <div class="modal" :style="{width: width}">
        <div class="modal__header">
            <span class="m-title">{{title}}</span>
        </div>
        <div class="modal__body">
            <div v-if="title == 'success'">
                <div class="container-item__row flex-center">
                    <img class="m-form-img" src="@Assets/img/success.svg" alt="succes">
                </div>
                <div class="container-item__row flex-center">
                    <span class="m-title">
                        {{subject}} ha sido {{action}} con exito
                    </span>
                </div>
            </div>
            <div v-if="title == 'warning'">
                <div class="container-item__row flex-center">
                    <img class="m-form-img" src="@Assets/img/warning.svg" alt="warning">
                </div>
                <div class="container-item__row flex-center">
                    <span class="m-title">
                        {{subject}} ha tenido un error durante la ejecución
                    </span>
                </div>
            </div>
            <div v-if="title == 'failure'">
                <div class="container-item__row flex-center">
                    <img class="m-form-img" src="@Assets/img/failure.svg" alt="error">
                </div>
                <div class="container-item__row flex-center">
                    <span class="m-title">
                        {{subject}} no pudo ser {{action}}
                    </span>
                </div>
            </div>
        </div>
        <div class="modal__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "notification-modal",
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        action: {
            type: String,
            default: ""
        },
        subject: {
            type: String,
            default: ""
        }
    }
}
</script>