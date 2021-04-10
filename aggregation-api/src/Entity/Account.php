<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Account
 *
 * @ORM\Table(name="account", uniqueConstraints={@ORM\UniqueConstraint(name="login", columns={"login"})})
 * @ORM\Entity
 */
class Account
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_account", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idAccount;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=80, nullable=false)
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=80, nullable=false)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="mail", type="string", length=100, nullable=false)
     */
    private $mail;

    /**
     * @var int
     *
     * @ORM\Column(name="account_type", type="integer", nullable=false)
     */
    private $accountType;


}
