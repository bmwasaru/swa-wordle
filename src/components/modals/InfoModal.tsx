import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Jinsi ya Kucheza" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Kila siku tuna neno la kipekee. Bahatisha neno uko na majaribio 6. Kila safu inawakilisha jaribio. Baada ya kila jaribio, rangi ya vigae itabadilika ili kuonyesha jinsi bahatisho lako lilivyokuwa karibu na neno.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="I" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell value="B" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Herufi W iko katika neno na mahali panapofaa.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="T" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="E" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Herufi L iko kwenye neno lakini iko mahali pasipofaa.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="T" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Herufi U haiko katika neno mahali popote.
      </p>
    </BaseModal>
  )
}
