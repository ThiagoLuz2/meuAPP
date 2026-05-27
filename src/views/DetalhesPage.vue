<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tarefas" />
        </ion-buttons>
        <ion-title>Detalhes da tarefa</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">
      <div v-if="tarefa">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ tarefa.texto }}</ion-card-title>
            <ion-card-subtitle>
              {{ tarefa.concluida ? 'Concluída' : 'Pendente' }}
            </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>ID: {{ tarefa.id }}</p>
            <p>Status: <strong>{{ tarefa.concluida ? 'Concluída' : 'Não concluída' }}</strong></p>
          </ion-card-content>
        </ion-card>

        <ion-button
          expand="block"
          color="success"
          @click="concluir(tarefa.id)"
        >
          {{ tarefa.concluida ? 'Marcar como pendente' : 'Marcar como concluída' }}
        </ion-button>

        <ion-button expand="block" fill="outline" @click="voltar">
          Voltar
        </ion-button>
      </div>

      <div v-else class="empty-state">
        <p>Tarefa não encontrada.</p>
        <ion-button expand="block" fill="outline" @click="voltar">
          Voltar
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useIonRouter } from '@ionic/vue';
import { useTarefas } from '../composable/useTarefas';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

const route = useRoute();
const ionRouter = useIonRouter();
const { tarefas, concluir } = useTarefas();

const id = computed(() => Number(route.params.id));
const tarefa = computed(() => tarefas.value.find(t => t.id === id.value));

function voltar() {
  if (ionRouter.canGoBack()) {
    ionRouter.back();
  } else {
    ionRouter.replace('/tabs/tarefas');
  }
}
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: 40px 0;
}

.empty-state p {
  color: #666;
  margin-bottom: 16px;
}
</style>
