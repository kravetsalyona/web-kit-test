export interface PostMessageDataIoS {
    /**
     * value: "2.0" -- const
     */
    jsonrpc: string,
    /**
     * values: ios handlers [pageDidLoad, pageResized]
     * Типизированный набор строк,
     */
    handler: string,
    type: string, // вместо handler
  
    body: {
      /**
       * values: [get, set]
       * set - вызвать сообщение с set
       *     key: phone_number_to_call
       *     value: +7925190999
       */
      method: string,
  
      params: {
        /**
         * это имя поля с данными
         * соотв. нужен список ключей [support_number, token , ..].
         */
        key: string
  
        // optional, ex. phone-number to call
        value?: string | any
      }
    }
  }
  