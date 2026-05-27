<template>
  <IonPage>
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Perfil</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Seu perfil</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p v-if="nome">Olá, <strong>{{ nome }}</strong></p>
          <p v-else>Ainda não há nome definido.</p>
        </IonCardContent>
      </IonCard>

      <IonItem>
        <IonLabel position="stacked">Nome</IonLabel>
        <IonInput v-model="nomeInput" placeholder="Digite seu nome" />
      </IonItem>

      <div class="actions">
        <IonButton expand="block" color="primary" @click="salvar">Salvar</IonButton>
        <IonButton expand="block" fill="outline" color="danger" @click="limpar">Limpar</IonButton>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUsuarioStore } from '../stores/usuario';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  alertController
} from '@ionic/vue';

const store = useUsuarioStore();
const nome = computed(() => store.nome);
const nomeInput = ref<string>(store.nome ?? '');

async function salvar() {
  if (!nomeInput.value || !nomeInput.value.trim()) return;
  store.setNome(nomeInput.value.trim());
  const alert = await alertController.create({
    header: 'Salvo',
    message: 'Nome salvo com sucesso.',
    buttons: ['OK']
  });
  await alert.present();
}

async function limpar() {
  store.clear();
  nomeInput.value = '';
  const alert = await alertController.create({
    header: 'Removido',
    message: 'Nome removido.',
    buttons: ['OK']
  });
  await alert.present();
}
</script>

<style scoped>
.actions {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-direction: column;
}

p {
  margin: 0 0 8px 0;
}
</style>
