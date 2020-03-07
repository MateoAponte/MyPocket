<template>
    <div class="container-item__row">
        <div class="container-item__column">
            <span class="m-label">
                {{title}}
            </span>
            <span class="m-small">{{description}}</span>
        </div>
        <div class="container-item__column">
            <span class="m-label">
                {{data}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "reportSummaryCard",
    props: {
        title: {
            type: String,
            default: "-"
        },
        description: {
            type: String,
            default: "-"
        },
        data: {
            type: String,
            default: "-"
        }
    }
}
</script>