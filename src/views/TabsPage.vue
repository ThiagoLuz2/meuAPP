<template>
  <IonTabs>
    <IonRouterOutlet />
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/tabs/home">
        <IonIcon :icon="home" />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tarefas" href="/tabs/tarefas">
        <IonIcon :icon="list" />
        <IonLabel>Tarefas</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
</template>

<script setup lang="ts">
import { IonTabs, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/vue';
import { home, list } from 'ionicons/icons';
</script>