<template>
    <ion-card>
        <ion-content>
            <ion-item lines="none">
                <ion-icon slot='start'
                :icon ="props.tarefa.feita ? checkmarkDoneOutline : ellipseOutline"
                :color ="props.tarefa.feita ? 'success' : 'warning'"
                @click = "emit('concluir', props.tarefa.id)">
            <ion-label :style='props.tarefa.feita ? "text-decoration: line-through;" : "text-decoration: none;"' >
                {{ props.tarefa.texto }}
            </ion-label>
            <ion-button @click = "emit('concluir', tarefa.id)" size="small">ss</ion-button>
            <ion-button slot="end" fill="clear" color="danger"
            @click = "emit('remover', props.tarefa.id)">
                <ion-icon :icon="trashOutline"/>
            </ion-button>
            </ion-icon>
            </ion-item>
        </ion-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonContent, IonIcon, IonCard, IonButton, IonItem, IonLabel } from '@ionic/vue';
import { checkmarkDoneOutline, ellipseOutline, trashOutline } from 'ionicons/icons';
interface Tarefa {
  id: number;
  texto: string;
  feita: boolean;
}
const props = defineProps<{ tarefa: Tarefa}>()
const emit = defineEmits<{
remover: [id: number]
concluir: [id: number]
}>()
</script>