import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="چارا برماٴين" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-gray-500 dark:text-gray-300">
        تکا ڤرکاتاٴنڽ دالم 7 چوباٴن!
      </p>
    <br/><hr/>
    <div className="contohbox">
      <p className="text-right">
        چونتوه:
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ک‍"
          status="correct"
        />
        <Cell value="‍ݢ‍" />
        <Cell value="‍ل‍" />
        <Cell value="‍ڤ‍" />
        <Cell value="‍ن" />
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        حروف <b>'ک'</b> براد ڤد کدودوقن يڠ تڤت.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ا" />
        <Cell value="ي‍" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="‍س‍"
          status="present"
        />
        <Cell value="‍و" />
        <Cell value="ق" />
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        حروف <b>'س'</b> ترداڤت دالم جواڤن⹁ تتاڤي بوکن دکدودوقن يڠ بتول.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ت‍" />
        <Cell value="‍ر" />
        <Cell value="ج‍" />
        <Cell isRevealing={true} isCompleted={true} value="‍م‍" status="absent" />
        <Cell value="‍ه" />
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        حروف <b>'م'</b> تياد دالم جواڤن.
      </p>
    </div>
      <br/><hr/>
      <p className="mt-6 italic text-sm text-gray-700 dark:text-gray-300">
        ڤرماٴينن تکا-تکي کات اين اياله سبواه ڤروجيک سومبر تربوک! ليهتله کود سومبرڽ{' '}
        <a
          href="https://github.com/jiaminglimjm/katadel"
          className="underline font-bold"
        >دسيني
        </a>!
      </p>
    </BaseModal>
  )
}
