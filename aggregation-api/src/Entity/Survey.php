<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Survey
 *
 * @ORM\Table(name="survey", indexes={@ORM\Index(name="id_account", columns={"id_account"})})
 * @ORM\Entity
 */
class Survey
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_survey", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idSurvey;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=false)
     */
    private $description;

    /**
     * @var \Account
     *
     * @ORM\ManyToOne(targetEntity="Account")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_account", referencedColumnName="id_account")
     * })
     */
    private $idAccount;


}
