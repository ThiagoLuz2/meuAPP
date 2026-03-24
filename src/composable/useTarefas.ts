import {ref, computed, watch} from 'vue';

interface Tarefa {
    id: number;
    texto: string;
    concluida: boolean;
}
export function useTarefas() {
    const tarefas = ref<Tarefa[]>([])
    const busca = ref('')
    const filtroAtivo = ref<'todas' | 'pendentes' | 'concluidas'>('todas')
    const filtradas = computed(() => {
    const termo = busca.value.toLowerCase()
    return tarefas.value
    .filter (t => t.texto.toLowerCase().includes(termo))
    .filter (t => {
        if (filtroAtivo.value === 'pendentes') return !t.concluida
        if (filtroAtivo.value === 'concluidas') return t.concluida
        return true
    })
    })

    const totalPendentes = computed(() => tarefas.value.filter(t => !t.concluida).length)
    
    function adicionar (texto: string) {
        if (!texto.trim()) return
        tarefas.value.push({id: Date.now(), texto, concluida: false})
    }

    function remover (id: number) {
        tarefas.value = tarefas.value.filter(t => t.id !== id)
    }

    function concluir (id: number) {
        const t = tarefas.value.find(t => t.id === id)
        if (t) t.concluida = !t.concluida
    }
    watch(totalPendentes, (valor) => {
        if (valor === 0 && tarefas.value.length > 0) {
           console.log('Parabéns! Você concluiu todas as tarefas!')  
        }
    
    })
    return {
        tarefas,
        busca,
        filtroAtivo,
        filtradas,
        totalPendentes,
        adicionar,
        remover,
        concluir
    }
}