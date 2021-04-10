<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * VoteNote
 *
 * @ORM\Table(name="vote_note", indexes={@ORM\Index(name="id_choice", columns={"id_choice"}), @ORM\Index(name="id_account", columns={"id_account"})})
 * @ORM\Entity
 */
class VoteNote
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_vote", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idVote;

    /**
     * @var float
     *
     * @ORM\Column(name="note", type="float", precision=10, scale=0, nullable=false)
     */
    private $note;

    /**
     * @var int
     *
     * @ORM\Column(name="rank", type="integer", nullable=false)
     */
    private $rank;

    /**
     * @var \Choice
     *
     * @ORM\ManyToOne(targetEntity="Choice")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_choice", referencedColumnName="id_choice")
     * })
     */
    private $idChoice;

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
