import { ref } from 'vue';

const nomeRef = ref<string | null>(null);

export function useUsuarioStore() {
  function setNome(n: string) {
    nomeRef.value = n;
  }

  function clear() {
    nomeRef.value = null;
  }

  return {
    get nome() {
      return nomeRef.value;
    },
    nomeRef,
    setNome,
    clear
  } as const;
}

export default useUsuarioStore;
