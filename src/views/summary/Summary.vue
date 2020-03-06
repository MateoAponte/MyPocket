<template>
    <div class="m-general-container">
        <div class="m-container summary-container">
            <div class="m-container-row">
                <div class="m-container-column">
                    <div class="m-card">
                        <div class="m-card-header">
                            <div class="container-item__row">
                                <span class="m-title-big">
                                    Resumen
                                </span>
                            </div>
                        </div>
                        <div class="m-card-body">
                            <summary-progress />
                        </div>
                    </div>
                </div>
            </div>
            <summary-toggle />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import summaryProgress from '@Components/summary/summaryProgress';
import summaryToggle from '@Components/summary/summaryToggle';

export default {
    components: {
        summaryProgress,
        summaryToggle
    },
}
</script>