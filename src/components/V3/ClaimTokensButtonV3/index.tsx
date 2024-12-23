'use client'

import { Box, Button, CircularProgress } from '@mui/material'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import { claimFaucetTokens } from 'api'
import { memo, useState } from 'react'
import React from 'react'

import { useMessage } from 'app/context/MessageContext'

const ClaimTokensButtonV3 = () => {
  const { isConnected, address, chainId } = useWeb3ModalAccount()
  const [loading, setLoading] = useState(false)

  const { setMessageData } = useMessage()

  const handleClick = async () => {
    try {
      setLoading(true)
      if (isConnected && address && chainId) {
        const res = await claimFaucetTokens(address, chainId)

        if (res.success === true) {
          setMessageData({
            message: `${res.res.msg}`,
            severity: 'success'
          })
          setLoading(false)
        } else {
          setMessageData({
            message: `${res.res.msg}`,
            severity: 'error'
          })
          setLoading(false)
        }
      }
    } catch {
      setMessageData({
        message: `Error claiming tokens`,
        severity: 'error'
      })
      setLoading(false)
    }
  }

  return (
    <>
      {isConnected ? (
        <Button
          sx={{ borderRadius: 5, mr: 2 }}
          variant='contained'
          onClick={handleClick}
        >
          <Box sx={{ visibility: loading ? 'hidden' : 'visible' }}>
            Claim Tokens
          </Box>
          {loading && (
            <CircularProgress
              size={18}
              sx={{ color: 'white', position: 'absolute' }}
            />
          )}
        </Button>
      ) : (
        <></>
      )}
    </>
  )
}

export default memo(ClaimTokensButtonV3)
