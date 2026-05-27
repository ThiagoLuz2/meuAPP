<template>
  <IonPage>
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Tarefas a fazer</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <div class="tarefa-container">
        <div class="input-group">
          <IonInput
            v-model="novaTarefa"
            placeholder="Digite uma nova tarefa..."
            @keyup.enter="adicionarNova"
          />
          <IonButton @click="adicionarNova" color="success" fill="solid" expand="block">
            <IonIcon :icon="addOutline" /> Adicionar
          </IonButton>
        </div>

        <template v-if="filtradas.length > 0">
          <div class="lista-tarefas">
            <div v-for="tarefa in filtradas" :key="tarefa.id" class="tarefa-item">
              <CardTarefa
                :tarefa="tarefa"
                @remover="remover"
                @concluir="concluir"
              />
              <IonButton expand="block" fill="outline" @click="abrirDetalhes(tarefa.id)">
                Ver detalhes
              </IonButton>
            </div>
          </div>
        </template>

        <div class="vazio" v-else>
          <p>Não há tarefas para mostrar.</p>
        </div>
      </div>
    </IonContent>

    <IonButton @click="router.push('/tabs/home')">voltar</IonButton>
  </IonPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIonRouter } from '@ionic/vue';
import router from '@/router';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonButton,
  IonTitle,
  IonToolbar,
  IonInput
} from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import CardTarefa from '../components/CardTarefa.vue';
import { useTarefas } from '../composable/useTarefas';

const { filtradas, adicionar, remover, concluir } = useTarefas();
const novaTarefa = ref('');
const ionRouter = useIonRouter();

function adicionarNova() {
  adicionar(novaTarefa.value);
  novaTarefa.value = '';
}

function abrirDetalhes(id: number) {
  ionRouter.push(`/tabs/tarefas/${id}`);
}
</script>

<style scoped>
.tarefa-container {
  padding: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

ion-input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.lista-tarefas {
  margin-top: 20px;
}

.tarefa-item {
  margin-bottom: 16px;
}

.vazio {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.vazio p {
  font-size: 16px;
}
</style>