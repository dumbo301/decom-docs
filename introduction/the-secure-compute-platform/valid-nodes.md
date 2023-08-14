# VALID Nodes

A decentralized network of transparent nodes that serve as DApp serving points and processors.

## VALID Node Featrues:

VALID Nodes carry out the following tasks

* **Serve as end-point** for VALIDocs and VALIDapp requests.
  VALIDapp and VALIDocs point their Domains to Secure Launcher endpoints. This standard Secure Launcher has following features:
  * Fully auditable integrity checks
  * Zero Trust responses: only replies to request if the IPFS content has been untampered with
  * Provide SSL Certificates
* **Provide Processing & Indexing storage** for DApps that require non-blockchain based processing capabilities and storage&#x20;
* **Serve as IPFS** Pinning Node All VALID nodes need to also pin IPFS content

## Mode of Operations

Nodes may be run in the following modes:


| Mode                   | Details                                                                                                             | Requirement                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| VALID Network - Public | Node that is running as part of the VALID Public node. Serves as a member of the decentralized network              | Specific qualification needs must be met (ie staking of $VALID bond & passing of community vote) |
| Test-Net Public        | Node that is set up on a testnet environment to enable testing of VALIDocs and VALIDapps. Performance may be slower | Community selection                                                                              |
| Private                | Projects may run nodes privately to serve own needs.                                                                | None                                                                                             |
