import { readonly } from 'vue'
import UserModule from './users'
import GlobalModule from './user'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
