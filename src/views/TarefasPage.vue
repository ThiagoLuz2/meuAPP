<template>
    <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tarefas a fazer</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true"> 
      <div class="tarefa-container">
        <div class="input-group">
          <ion-input 
            v-model="novaTarefa" 
            placeholder="Digite uma nova tarefa..."
            @keyup.enter="adicionarNova"
          ></ion-input >
          <ion-button @click="adicionarNova" color= "success" fill="solid" expand="block" slot="end  ">
          <ion-icon :icon="addOutline"></ion-icon> Adicionar
          </ion-button>
        </div>
        
        <ion-card v-if="tarefas.length > 0" class="lista-tarefas">
          
          <ion-item v-for="tarefa in tarefas" :key="tarefa.id" class="tarefa-item">
            <ion-label>{{ tarefa.texto }}</ion-label>
            <ion-button 
              slot="end" 
              color="danger" 
              @click="remover(tarefa.id)"
              size="small"
            ><ion-icon :icon="trashOutline"></ion-icon>
              Remover
            </ion-button>
          </ion-item>
        </ion-card>

        <div v-else class="vazio">
          <p>Nenhuma tarefa adicionada. Adicione uma para começar!</p>
        </div>
      </div>
    </ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Tarefas a fazer</ion-title>
          
        </ion-toolbar>
         
      </ion-header>
      <Stars :total="3"></Stars>
      <IonButton @click="router.push('/Home')">voltar</IonButton>
  </ion-page>


</template>


<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { IonContent, IonHeader, IonPage, IonIcon, IonCard, IonButton, IonTitle, IonToolbar, IonInput, IonItem, IonLabel } from '@ionic/vue';
import { addOutline, trashOutline} from 'ionicons/icons';
import {useTarefas} from '@/composable/useTarefas';

const { tarefas, adicionar, remover } = useTarefas()
const novaTarefa = ref('')
function adicionarNova() {
  adicionar(novaTarefa.value)
  novaTarefa.value = ''
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
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.vazio {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.vazio p {
  font-size: 16px;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>