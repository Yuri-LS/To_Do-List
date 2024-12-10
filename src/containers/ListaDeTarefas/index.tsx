import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const Tarefas = [
  {
    titulo: 'Estudar progamação',
    descricao: 'Continuar os módulos do curso',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Terminar o projeto "To Do List"',
    descricao:
      'finalizar a construção e implementar as funcionalidades do projeto',
    prioridade: 'urgente',
    status: 'concluido'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer o treino C',
    prioridade: 'normal',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {Tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
