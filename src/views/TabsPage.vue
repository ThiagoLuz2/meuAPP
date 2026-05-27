<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon :icon="homeOutline" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tarefas" href="/tabs/tarefas">
          <IonIcon :icon="checkboxOutline" />
          <IonLabel>Tarefas</IonLabel>
        </IonTabButton>

        <IonTabButton tab="perfil" href="/tabs/perfil">
          <IonIcon :icon="personOutline" />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonLabel
} from '@ionic/vue'

import {
  checkboxOutline,
  homeOutline,
  personOutline
} from 'ionicons/icons'
</script>