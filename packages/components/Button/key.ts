import type {InjectionKey} from 'vue'
import type { ButtonGroupContext } from 'zq-ui'

export const BUTTON_GROUP_INJECTION_KEY: InjectionKey<ButtonGroupContext> = Symbol('button group context')