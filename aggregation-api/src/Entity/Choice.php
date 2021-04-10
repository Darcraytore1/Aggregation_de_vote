<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Choice
 *
 * @ORM\Table(name="choice", indexes={@ORM\Index(name="id_survey", columns={"id_survey"})})
 * @ORM\Entity
 */
class Choice
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_choice", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idChoice;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50, nullable=false)
     */
    private $name;

    /**
     * @var \Survey
     *
     * @ORM\ManyToOne(targetEntity="Survey")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_survey", referencedColumnName="id_survey")
     * })
     */
    private $idSurvey;


}
